<template >
  <div class="page">
    <nav-bar></nav-bar>
    <main class="h-full">
      <section class="section">
        <div class="container">
          <h1 class="title">All the tools to unlock your data</h1>
          <div class="block md:grid md:grid-cols-12">
            <div class="col-span-6">
              <img src="https://redash.io/assets/images/elements/icon-query.png" width="64px">
              <h2
                class="solgan"
              >Enjoy the power and comfort of Redash's query editor with powerful collaboration</h2>
              <ul class="highlight-ul">
                <li>Write queries in their natural syntax and explore schemas</li>
                <li>Live auto-complete and keyboard shortcuts</li>
                <li>Create snippets for elements you frequently use</li>
                <li>Results are cached for minimal running times</li>
                <li>Schedule auto-update times for results you rely on</li>
                <li>Use query results as data sources to join different databases</li>
              </ul>
              <p>
                <img
                  src="https://redash.io/assets/images/elements/integrations-small.png"
                  width="75%"
                >
              </p>
              <a
                data-track="true"
                data-track-location="product-hero"
                track-event="Clicked Check Integrations"
                class="btn btn-secondary"
                href="/integrations"
              >Check integrations</a>
            </div>
            <div class="col-span-6">
              <div class="browser-container">
                <img class="" src="https://redash.io/assets/images/elements/browser-header.png">
                <img class="" src="https://redash.io/assets/images/elements/query-editor-focus.png">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-blue-200 section">
        <div class="container">
          <div class="row">
            <div class="col-md-6 push-sm-down">
              <img
                src="https://redash.io/assets/images/elements/visualizing-data.png"
                width="100%"
                class="visualize-dashboards-illustrated"
              >
            </div>
            <div class="col-md-6">
              <img src="https://redash.io/assets/images/elements/icon-dashboard.png" width="64px">
              <h4 class="m-b-0">Visualize as you will &amp;</h4>
              <h2 class="m-t-0">create amazing dashboards</h2>
              <ul class="highlight-ul">
                <li>Easily visualize your results in various formats: chart, cohort, pivot table, boxplot, map, counter, sankey, sunburst and word cloud</li>
                <li>Gather info from multiple sources into thematic dashboards</li>
                <li>Share your data-story with colleagues, other teams or external partners</li>
                <li>Share dashboards on a URL or embed widgets anywhere you need for timely and contextual data</li>
              </ul>
              <h4>Visualization types</h4>
              <p>
                <span class="label label-primary">Charts: Line, Bar, Area, Pie, Scatter</span>
                <span class="label label-primary">Boxplot</span>
                <span class="label label-primary">Cohort</span>
                <span class="label label-primary">Sunburst</span>
                <span class="label label-primary">Word Cloud</span>
                <span class="label label-primary">Sankey</span>
                <span class="label label-primary">Map</span>
                <span class="label label-primary">Counter</span>
                <span class="label label-primary">Pivot Table</span>
                <span class="label label-primary">Funnel</span>
              </p>
              <p class="m-t-25 m-b-0">
                <a
                  href="https://redash.io/help/user-guide/visualizations/visualization-types"
                >See examples in the Redash Docs</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  head: {
    title: "Home page",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Home page description"
      }
    ]
  }
};
</script>

<style>
.label {
  display: inline-block;
  padding: 4px 15px;
  margin-right: 4px;
  margin-bottom: 4px;
  border-radius: 25px;
  line-height: 1.3;
}
.label-primary {
  border: 1px solid #4080fe;
  color: #4080fe;
  background: hsla(0, 0%, 100%, 0.75);
}
.solgan {
  font-size: 22px;
  margin-bottom: 20px;
  @apply font-medium;
}
.row {
  @apply md:grid grid-cols-12;
}
.col-md-6 {
  @apply md:col-span-6 space-y-5;
}
.btn {
  min-height: 34px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans,
    Ubuntu, Cantarell, Helvetica Neue, sans-serif !important;
  @apply inline-block px-4 py-2 shadow-md;
}
.btn-secondary {
  border: 1px solid rgba(33, 150, 243, 0.2);
  box-shadow: 0 6px 13px -6px rgb(33 150 243 / 25%);
  border-radius: 2px;
  font-weight: 500;
  color: #2196f3;
}
.btn-secondary:hover {
  box-shadow: 0 6px 17px -3px rgb(33 150 243 / 20%);
}
.highlight-ul {
  list-style-image: url(https://redash.io/assets/images/elements/check.svg);
  margin-bottom: 20px;
  @apply text-sm;
}
.title {
  margin-top: 20px;
  margin-bottom: 100px;
  font-size: 28px;
  font-weight: 500;
  @apply text-center;
}
.container {
  padding: 25px;
  @apply m-auto;
}
.section {
  padding: 35px 0;
}
.page {
  width: 100vw !important;
  height: 100vh !important;
  padding-top: 68px;
  @apply w-full h-full;
}
</style>
