// =============================
// Email: info@ebenmonney.com
// www.ebenmonney.com/templates
// =============================

import { AppPage } from './app.po';

describe('TimeRecorder App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display application title: TimeRecorder', () => {
        page.navigateTo();
        expect(page.getAppTitle()).toEqual('TimeRecorder');
    });
});
