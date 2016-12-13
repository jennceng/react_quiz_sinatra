import App from '../src/components/App';
import data from '../src/constants/data';

describe('Question Index', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <App data={data} />
    );
  });

  afterEach(() => {
    wrapper.unmount();
  });

  describe('visiting the quiz page', () => {
    it('has the question body and answer choices', () => {
      let pageText = wrapper.text();
      let question = wrapper.find('#question')
      // why does the following not work?
      // expect(question.text()).toEqual('What is the best Javascript Framework?');
      // expect(pageText).toMatch('What is the best Javascript Framework?');
      expect(pageText).toMatch(data.question.body);
      expect(pageText).toMatch('React');
      expect(pageText).toMatch('Ember');
      expect(pageText).toMatch('Angular 2');
      expect(pageText).toMatch('Rails');
      expect(pageText).not.toMatch('WRONG');
      expect(pageText).not.toMatch('CRUSHED IT');
      // expect(question.text()).toContain(data.question.body);
    });
  });

  describe('select an incorrect response', () => {
    it('shows a response of WRONG for selecting rails', done => {
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'Rails';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("WRONG");
        done();
      }, 0);
    });

    it('shows a response of WRONG for selecting Ember', done => {
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'Ember';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("WRONG");
        done();
      }, 0);
    });

    it('shows a response of WRONG', done => {
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'Angular 2';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("WRONG");
        done();
      }, 0);
    });

  });

  describe('toggle between wrong and right answers', () => {
    it('shows a response of WRONG for selecting rails', done => {
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'Rails';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("WRONG");
        done();
      }, 0);
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'React';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("CRUSHED IT");
        done();
      }, 0);
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'Rails';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("WRONG");
        done();
      }, 0);
    });

  });


  describe('select a correct response of React', () => {
    it('shows a response of CRUSHED IT', done => {
      setTimeout(() => {
        let wrongAnswer = wrapper.findWhere(n => {
          return n.type() === 'p' && n.text() === 'React';
        });
        simulateIfPresent(wrongAnswer, 'click');
      }, 0);
      setTimeout(() => {
        let pageText = wrapper.text();
        expect(pageText).toMatch("CRUSHED IT");
        done();
      }, 0);
    });
  });


});
