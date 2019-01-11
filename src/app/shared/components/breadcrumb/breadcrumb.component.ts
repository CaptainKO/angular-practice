import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { distinctUntilChanged, filter, map } from "rxjs/operators";

import { BreadCrumb } from "./breadcrumb.d";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    distinctUntilChanged(),
    map(event => { return this.buildBreadCrumb(this.activatedRoute) })
  );
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.buildBreadCrumb2();
  }

  buildBreadCrumb(
    route: ActivatedRoute,
    url: string = '',
    breadCrumbs: Array<BreadCrumb> = []) {
    const ROOT = "Home"
    // If routeConfig is available we are on the root path
    const label: string = route.routeConfig && route.routeConfig.data ? route.routeConfig.data['breadcrumb'] : ROOT;
    const path: string = route.routeConfig ? route.routeConfig.path : '';
    // In the routerConfig the complete path is not available,
    // so we rebuild it each time
    var nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    var newBreadCrumbs;

    // The following IF statements below is for the child path

    if (route.routeConfig && route.routeConfig.children != null) {
      // if the route has children then
      let found = route.routeConfig.children
        .findIndex((x) => {
          return x.data.breadcrumb === label;
        });
      // find the path: '' (default path)
      if (found !== -1 && found !== undefined) {
        // if find it then replace then
        // keep the breadcrumb (the orignal parameter)
        newBreadCrumbs = breadCrumbs;
      } else {
        // if We found notthing then add a new breadcrumb
        newBreadCrumbs = [...breadCrumbs, breadcrumb];
      }

    }

    // The following IF is for the lazyloading modules

    else if (route.routeConfig && route.routeConfig.loadChildren) {
      newBreadCrumbs = [...breadCrumbs, breadcrumb];
    } else {
      if (label.toUpperCase() === ROOT.toUpperCase()) {
        //
        newBreadCrumbs = [{ label: label, url: url }];
      } else {
        // default behaviour
        newBreadCrumbs = [...breadCrumbs, breadcrumb];
      }
    }
    if (route.firstChild) {

      // if we are not our current path yet,
      // there will be more children to look after, to build our breadcrumb
      // console.log(newBreadCrumbs);

      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadCrumbs);
    }
    // console.log(newBreadCrumbs);
    return newBreadCrumbs;
  }
  buildBreadCrumb2() {
    var url = this.router.url;
    var paths = url.split('/');
    var breadCrumbs: any[] = [];
    for (let i = 0; i < paths.length; i++) {
      var path = (paths.slice(0, i + 1)).join('/');
      var label = this.justFirst(paths.slice(i, i + 1)[0]);
      if (label == '') { label = 'Home'; path = path == '' ? '/' : path };
      breadCrumbs.push({ label: label, url: path + '/' });
    }
    console.log('joined', paths.join('/'));
    console.log('breadcrumbs', breadCrumbs);
    return breadCrumbs;

  }
  private justFirst(s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
