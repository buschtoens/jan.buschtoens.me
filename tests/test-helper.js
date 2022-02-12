import { setApplication } from '@ember/test-helpers';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

import Application from 'jan-buschtoens-me/app';
import config from 'jan-buschtoens-me/config/environment';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
