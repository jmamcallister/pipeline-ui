import { PipelineUiPage } from './app.po';

describe('pipeline-ui App', () => {
  let page: PipelineUiPage;

  beforeEach(() => {
    page = new PipelineUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
