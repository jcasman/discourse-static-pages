import Page from '../../admin/models/page';

export default Discourse.Route.extend({
  actions: {
    create() {
      const { title, body } = this.controller.model;

      Page.create({ title, body })
        .then(() => {
          this.transitionTo('adminPlugins.pages.index');
        })
        .catch(() => {
          alert('Error creating page.');
        });
    },

    cancel() {
      this.transitionTo('adminPlugins.pages.index');
    }
  },

  model() {
    return {};
  }
});
