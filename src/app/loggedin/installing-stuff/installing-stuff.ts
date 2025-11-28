import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-installing-stuff',
  imports: [CommonModule],
  templateUrl: './installing-stuff.html',
  styleUrl: './installing-stuff.css',
})
export class InstallingStuff implements OnInit {

  showDisplay:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  otherTopicsCompleted:any = [
    { sl:1, 
      category:'OTHER',
      topic:'Solid Principles, Design Patterns', 
      duration:'2 Weeks', 
      fromTo:'', 
      status:'DONE',
      comment:'REVISE_AGAIN>DONE',
      content:[{topic:'basics-of-software-architecture-design-in-java[udemy]', link:'https://www.udemy.com/course/basics-of-software-architecture-design-in-java'},
               {topic:'Java-Design-Patterns.pdf[doc]', link:'http://enos.itcollege.ee/~jpoial/java/naited/Java-Design-Patterns.pdf'},
               {topic:'Hands-On[git]', link: 'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src'}
              ]
    },
    { sl:2, 
      category:'OTHER',
      topic:'JVM', 
      duration:'2 Weeks', 
      fromTo:'',
      status:'DONE',
      comment:'REVISE_AGAIN>DONE',
      content:[
        {topic:'java-application-performance-and-memory-management[udemy]', link:'https://www.udemy.com/course/java-application-performance-and-memory-management'},
        {topic:'java-memory-management[udemy]', link:'https://www.udemy.com/course/java-memory-management'},
        {topic:'Hands-On[git]', link:'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/blob/master/src/JVMCommand.test'}
              ]
    },
    { sl:3, 
      category:'OTHER',
      topic:'Browser Deeper', 
      duration:'2 Weeks', 
      fromTo:'',
      status:'PENDING',
      comment:'--',
      content:[
        {topic:'JavaScript Basics with Browser[youtube]', link:'https://www.youtube.com/watch?v=Bv_5Zv5c-Ts'}
      ]
    },
    { sl:4, 
      category:'OTHER',
      topic:'JavaScript Design Patterns', 
      duration:'2 Weeks', 
      fromTo:'',
      status:'PENDING',
      comment:'--',
      content:[
        {topic:'javascript-design-patterns[pluralsights]', link:'https://app.pluralsight.com/library/courses/javascript-design-patterns/table-of-contents'},
        ]
    },
    { sl:5, 
      category:'OTHER',
      topic:'Algorithms & DataStructures', 
      duration:'2 Weeks', 
      fromTo:'',
      status:'PENDING',
      comment:'--',
      content:[
        {topic:'Geeks for Geeks[geeks for geeks]', link:'https://www.geeksforgeeks.org/data-structures/'}
      ]
    },
    { sl:6, 
      category:'OTHER',
      topic:'SQL Deeper', 
      duration:'2 Weeks', 
      fromTo:'',
      status:'PENDING',
      comment:'--',
      content:[
        {topic:'learn-database-design-using-postgresql[udemy]', link:'https://www.udemy.com/course/learn-database-design-using-postgresql/'},
        {topic:'postgresql-from-zero-to-hero[udemy]', link:'https://www.udemy.com/course/postgresql-from-zero-to-hero/'},
        {topic:'Normalization rules', link:'--'}
      ]
    }
  ];

  uiTopicsCompleted:any = [
    { sl:1, 
      category:'BACK_END',
      topic:'HTML-5, CSS-3', 
      duration:'', 
      fromTo:'', 
      status:'DONE',
      comment:'DONE',
      content:[
              ]
    },
    { sl:2, 
      category:'FRONT_END',
      topic:'JavaScript, Jasmine', 
      duration:'', 
      fromTo:'',
      status:'DONE',
      comment:'REVISE_AGAIN>DONE',
      content:[
              ]
    },
    { sl:3, 
      category:'FRONT_END',
      topic:'Angular', 
      duration:'', 
      fromTo:'',
      status:'DONE',
      comment:'DONE',
      content:[{topic:'Angular All Concepts[GIT]', link:'https://github.com/siripuramjagadishraj1/4.UI_angular_all_concepts'}
              ]
    },
    { sl:4, 
      category:'FRONT_END',
      topic:'JQuery', 
      duration:'', 
      fromTo:'',
      status:'DONE',
      comment:'DONE',
      content:[
              ]
    }
  ];

  backEndTopicsCompleted:any = [
    { sl:1, 
      category:'BACK_END',
      topic:'JAVA-8', 
      duration:'', 
      fromTo:'', 
      status:'DONE',
      comment:'REVISE_AGAIN',
      content:[
              ]
    },
    { sl:2, 
      category:'BACK_END',
      topic:'Concurrency', 
      duration:'', 
      fromTo:'',
      status:'DONE',
      comment:'REVISE_AGAIN',
      content:['https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent',
               'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent/atomic',
               'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent/lock',
               'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/concurrent/streams',
               'https://github.com/siripuramjagadishraj1/5.DesingPatternsJava8/tree/master/src/javas/java8'
              ]
    },
    { sl:3, 
      category:'BACK_END',
      topic:'Spring Boot', 
      duration:'', 
      fromTo:'',
      status:'DONE',
      comment:'AT_LAST',
      content:['Exception Handling(3 ways)',
                'LomobokJar, MapStract',
                'Testing: Junit, mockito, pwr mock,Unit vs Integraton testing',
                'Mock, spy, stub',
                'High Level Concepts: Gateway, security, configserver, service-service'
              ]
    },
    { sl:4, 
      category:'BACK_END',
      topic:'Hibernate', 
      duration:'', 
      fromTo:'',
      status:'PENDING',
      comment:'AT_LAST',
      content:[
              ]
    }
  ];

  getColor(a:number){
    if(a%2 ==0)
      return '#EEEEEE';
    else
      return '#DDDDDD';
  }
  
  getIncomplete(color:string){
    if(color == 'PENDING')
      return 'red';
    else
      return 'none'
  }

}


