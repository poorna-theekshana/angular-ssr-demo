import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ssr-demo',
  template: `
    <div class="card">
      <h2>Server-Side Rendered Data</h2>
      <p>{{ serverRenderedData }}</p>
    </div>
  `,
  styles: [
    `
      .card {
        padding: 1rem;
        margin: 1rem;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    `,
  ],
})
export class SsrDemoComponent implements OnInit {
  serverRenderedData: string = 'Data fetched on the server side!';

  ngOnInit(): void {
    // Simulate fetching data from an API (you can replace this with actual API calls)
    // For simplicity, we use a timeout to simulate an asynchronous operation
    setTimeout(() => {
      // Update the server-rendered data after fetching
      this.serverRenderedData = 'Updated data from the server!';
    }, 2000);
  }
}
