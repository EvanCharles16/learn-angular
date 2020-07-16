## Course Structure

---

<ol>
    <li>Getting Started</li>
    <li>The Basics</li>
    <li>Components & DataBinding</li>
    <li>Directives</li>
    <li>Services & Dependency Injection</li>
    <li>Routing</li>
    <li>Observables</li>
    <li>Forms</li>
    <li>Pipes</li>
    <li>Http</li>
    <li>Optimizations & NgModules</li>
    <li>Deployment</li>
    <li>Animation & Testing</li>
</ol>

---

<br/>

<h3>Data Binding (Communication)</h3>
<p>Communication between your Typescript code of you component, your business logic</p>
<ol>
    <h5>Output Data (From Business Logic to HTML)</h5>
    <li>String Interpolation ( {{ data }} )</li>
    <li>Property Binding ( [property] = "data" )</li>
</ol>

<ol>
    <h5>React to (User) Events (From HTML to Business Logic)</h5>
</ol>

<h3>Directives</h3>
<p>Directives are instructions in the DOM <br/> Example : selector</p>

\* => a structural directive.

\*ngIf => a structural directive which means it changes the structure of our DOM, it either adds this element or it doesn't add it.

\*ngFor => changing the DOM itself.

Unlike structural directives, attribute directives dont add or remove elements. They only change the element they were placed on.

<h3>Services & Dependency Injection</h3>
<p>A core feature of Angular which makes it really easy for you to have your different pieces of your app communicate with each other, to centralize code and to manage the state of your application.</p>

<h3>Observables</h3>
<p>Something which will make more sense once you've been through the routing section. It is a concept allowing you to work with asyncronous code.</p>

<h3>Pipes</h3>
<p>Another nice feature which makes it easy for you to transform the output(what you display on the template at runtime).</p>

<h3>Http</h3>
<p>Angular cant connect to a database directly, but it can connect to a server which is able to and the Http section shows just that.</p>

---

## TypeScript

<h4>TypeScript => More features than Vanila JS (e.g. Types, Classes, Interface, etc)</h4>
<h4>Generally though, TypeScript is an addition to Javascript; not a complete replacement, so a lot of the commands will look really familiar.</h4>

---

### App Module

<h4>Angular uses components to build web pages and uses modules to basically bundle different pieces, for example components of your app into packages.</h4>

### Module

<h4>Bundle of functionalities of our app and it basically gives Angular the information which features does my app have and use. </h4>

<h5>Note : App , only have one module , hence representing our complete app.</h5>

---

<a href="https://medium.com/siam-vit/how-an-angular-app-work-behind-the-scenes-angular-flow-dcc4d1df27bd">Angular Work Flow</a>

From Angular.JSON file ==> Main.ts ==> App.Module.ts ==> App.Component.ts ==> Index.html ==> App.Component.html

---

### Property Binding vs String Interpolation

When should we use that ?
<br/>

String Interpolation => When you want to output something in your template, print some text to it.

Property Binding => When you want to change some property, be that of a HTML Element or directive or a component.

<p style="text-align : center">IMPORTANT NOTE !!! <br/> "Dont mix Property Binding and String Interpolation"</p>

---

## Difference between Promise and Observable

<ol>
    <li>A Promise is eager, whereas an Observable is lazy</li>
    <li>A Promise is always asynchronous, while an Observable can be either synchronous or asynchronous,</li>
    <li>A Promise can provide a single value, whereas an Observable is a stream of values (from 0 to multiple values),</li>
    <li> you can apply RxJS operators to an Observable to get a new tailored stream.</li>
</ol>

For Example : <br/>
Promise emits a single value while Observable emits multiple values. So, while handling a HTTP request, Promise can manage a single response for the same request, but what if there are multiple responses to the same request, then we have to use Observable.

<strong>Promise</strong>

```
const promise = new Promise((data) =>
{ data(1);
  data(2);
  data(3); })
.then(element => console.log(‘Promise ‘ + element));

Promise 1  //Output
```

<strong>Observable</strong>

```
const observable = new Observable((data) => {
data.next(1);
data.next(2);
data.next(3);
}).subscribe(element => console.log('Observable ' + element));

Observable 1
Observable 2
Observable 3  //Output
```

---
