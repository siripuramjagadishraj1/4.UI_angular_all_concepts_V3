##  Angular 8 to 18+ migration and FAQ's
========================================
	Q. angular 17 app not routing on click of routeOutLet
	Ans: import -- > RouterLink in app.ts
	Q. Can't bind to 'ngClass' since it isn't a known property of 'td'
	Ans: import -- > CommonModule
	Q.  Property 'element' has no initializer and is not definitely assigned in the constructor
	Ans: 
	@Input('element') element:{userId:number; userName:string; userType:string}; 
	@Input('element') element:any;
	Q. object possibly null in angular & lot more minor syntax errors.
	Ans: tsconfig.json make sure-- > "compilerOptions": { "strict": false }
	Q. Can't bind to 'formGroup' since it isn't a known property of 'form'

	Ans: ReactiveFormsModule import this.
	Q. What is standalone true/false in angular.
	Q. Whats new in RX/JS library.
	Note
	* imports: [] is added to Compoent, but we dont have app.module.ts file to declare all components globally.
	give imports[] if standaloe = true, else dont give imports.

	package.json, angular.json

	main.ts -- > app.ts[app-root], app.config.ts[providers=provideBrowserGlobalErrorListeners,provideRouter,provideHttpClient]
	index.html,style.css,
		app.ts[RouterOutlet, RouterLink, Modules], 
		app.html -- > containse routes and side Menu Bar.
		app.config.ts(appConfig) --- >app.routes.ts
		NewLazyModule.ts(CustomersModule)
		global.services.ts, 
		app.config.ts, app.
		
		
		

	Angular older version:
	app-module.ts -- > old contains all the declaration of components. Now the parent component just need to declare it.
	app-routing.module.ts -- > 
	ng g c -- > used to create files with component extention.



	ng new 4.UI_angular_all_concepts_V3
	cd 4.UI_angular_all_concepts_V3
	cd src/app
	mkdir loggedin
	cd loggedin
	ng g c angular-project-structure    --skip-tests
	ng g c bindings                     --skip-tests
	ng g c build-misc-installs          --skip-tests
	ng g c component-life-cycle         --skip-tests
	ng g c custom-pipes                 --skip-tests
	ng g c dashboard                    --skip-tests
	ng g c decorator-custom             --skip-tests
	ng g c directives-custom            --skip-tests
	ng g c features                     --skip-tests
	ng g c form-demo                    --skip-tests
	ng g c http-calls-demo              --skip-tests
	ng g c input-elements               --skip-tests
		cd  input-elements
		ng g c nested-input --skip-tests

	ng g c installing-stuff             --skip-tests
	ng g c integration-of-frameworks    --skip-tests
	ng g c lazy-loading                 --skip-tests
	ng g c learn-type-script            --skip-tests
	ng g c local-references-and-tricks  --skip-tests
	ng g c observables-demo             --skip-tests
	ng g c output-elements              --skip-tests
		cd output-elements
		ng g c nested-input --skip-tests

	ng g c routing-cheat                --skip-tests
		cd routing-cheat
		ng g c sub-route1 --skip-tests
		ng g c sub-route2 --skip-tests

	ng g c user-list                    --skip-tests



	npm install --save bootstrap@3
	npm install jquery --save


	CustomPipe, Service,
	ng generate service global-services --skip-tests
	ng generate pipe myCustomPipe --skip-tests
	ng generate module NewLazyModule --skip-tests
	ng generate directive HighlightDirective --skip-tests
	ng generate guard auth --skip-tests

# 4UIAngularAllConceptsV3

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Angular 8->20 differences.

1. Static vs Dynamic components.
