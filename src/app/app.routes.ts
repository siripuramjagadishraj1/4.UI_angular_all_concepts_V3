import { Routes } from '@angular/router';
import { InstallingStuff } from './loggedin/installing-stuff/installing-stuff';
import { AngularProjectStructure } from './loggedin/angular-project-structure/angular-project-structure';
import { IntegrationOfFrameworks } from './loggedin/integration-of-frameworks/integration-of-frameworks';
import { LearnTypeScript } from './loggedin/learn-type-script/learn-type-script';
import { LocalReferencesAndTricks } from './loggedin/local-references-and-tricks/local-references-and-tricks';
import { InputElements } from './loggedin/input-elements/input-elements';
import { OutputElements } from './loggedin/output-elements/output-elements';
import { CustomPipes } from './loggedin/custom-pipes/custom-pipes';
import { ObservablesDemo } from './loggedin/observables-demo/observables-demo';
import { HttpCallsDemo } from './loggedin/http-calls-demo/http-calls-demo';
import { ComponentLifeCycle } from './loggedin/component-life-cycle/component-life-cycle';
import { BuildMiscInstalls } from './loggedin/build-misc-installs/build-misc-installs';
import { RoutingCheat } from './loggedin/routing-cheat/routing-cheat';
import { SubRoute1 } from './loggedin/routing-cheat/sub-route1/sub-route1';
import { SubRoute2 } from './loggedin/routing-cheat/sub-route2/sub-route2';
import { Bindings } from './loggedin/bindings/bindings';
import { FormDemo } from './loggedin/form-demo/form-demo';
import { DirectivesCustom } from './loggedin/directives-custom/directives-custom';
import { DecoratorCustom } from './loggedin/decorator-custom/decorator-custom';
import { LazyLoading } from './loggedin/lazy-loading/lazy-loading';
import { authGuard } from './auth-guard';

export const routes: Routes = [
   { path: 'InstallingStuffComponent',component: InstallingStuff},
   { path: 'AngularProjectStructureComponent',component: AngularProjectStructure},
   { path: 'IntegrationOfFrameworksComponent',component: IntegrationOfFrameworks},
   { path: 'LearnTypeScriptComponent',component: LearnTypeScript},
   { path: 'RoutingCheatComponent',component: RoutingCheat, 
     children:[
               { path:'childRouteDemo1', component: SubRoute1},
               { path:'childRouteDemo2', component: SubRoute2, canActivate: [authGuard]}
              ]
    },
   { path: 'BindingsComponent',component: Bindings },
   { path: 'LocalReferencesAndTricksComponent',component: LocalReferencesAndTricks},
   { path: 'InputElementsComponent',component: InputElements},
   { path: 'OutputElementsComponent',component: OutputElements},
   { path: 'CustomPipesComponent',component: CustomPipes},
   { path: 'ObservablesDemoComponent',component: ObservablesDemo},
   { path: 'HttpCallsDemoComponent',component: HttpCallsDemo},
   { path: 'FormDemoComponent',component: FormDemo },
   { path: 'DirectivesCustomComponent',component: DirectivesCustom },

   { path: 'DecoratorCustomComponent',component: DecoratorCustom },
   { path: 'LazyLoadingComponent', component:LazyLoading },

   { path: 'LazyLoadingComponent', loadChildren:() => import('./new-lazy-module-module').then(mod => mod.NewLazyModuleModule) },
   { path: 'ComponentLifeCycleComponent',component: ComponentLifeCycle },
   { path: 'BuildMiscInstallsComponent',component: BuildMiscInstalls }
];

