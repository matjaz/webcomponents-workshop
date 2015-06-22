
export class Main {
  configureRouter(config, router) {
    config.map([
      { route: '',         moduleId: './list', name: 'list' },
      { route: '/:bookId', moduleId: './edit', name: 'edit' }
    ]);

    this.router = router;
  }
}
