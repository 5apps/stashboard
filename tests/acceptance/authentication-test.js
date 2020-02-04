import { module, test } from 'qunit';
import { visit, /* currentURL */ } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
// import { authenticateSession } from 'ember-simple-auth/test-support';
import { default as window, setupWindowMock } from 'ember-window-mock';

module('Acceptance | authentication', function (hooks) {
  setupApplicationTest(hooks);
  setupWindowMock(hooks);

  // TODO need to setup Mirage for faking HTTP requests

  // test('visiting /apps while authenticated', async function (assert) {
  //   await authenticateSession({ access_token: '12340815' });
  //
  //   await visit('/apps');
  //
  //   assert.equal(currentURL(), '/apps');
  // });

  test('visiting /apps while not authenticated redirects to OAuth provider', async function (assert) {
    await visit('/apps');

    let expectedRedirectURL = 'https://5apps.dev/oauth/authorize?client_id=storage-frontend&redirect_uri=http://localhost:7357/callback&response_type=token&scope=storage-frontend';

    assert.equal(window.location.href, expectedRedirectURL);
  });
});
