describe('js/index', function() {

  it('should work', function() {
    expect(true).to.equal(true);
  });

  describe('square', function() {

    it('should return 4 as the square of 2', function() {
      expect(square(2)).to.equal(4);
    });

    it('should return 9 as the square of 3', function() {
      expect(square(2)).to.equal(4);
    });

    it('should return 1 as the square of -1', function() {
      expect(square(-1)).to.equal(1);
    });

  });

  describe('sayHello', function() {

    it('should say hello to Wendy', function() {
      expect(sayHello('Wendy')).to.equal('Hello Wendy');
    });

    it('should say hello to Fred', function() {
      expect(sayHello('Fred')).to.equal('Hello Fred');
    });

  });

  describe('displayGreeting', function() {

    // create a mock element and inject it in the body
    beforeEach(function() {
      this.headline = $('<h1></h1>');
      this.headline.addClass('greeting');

      $('body').append(this.headline);
    });

    // cleanup mocks
    afterEach(function() {
      this.headline.remove()
    });

    it('should display the greeting to Sparkles in h1.greeting element', function() {
      displayGreeting('Sparkles');
      expect($(this.headline).text()).to.equal('Hello Sparkles');
    });

    it('should display the greeting to Hanna in h1.greeting element', function() {
      displayGreeting('Hanna');
      expect($(this.headline).text()).to.equal('Hello Hanna');
    });

  });

  describe('renderGreeting', function() {

    it('should return the html greeting to Sparkles', function() {
      var html = renderGreeting('Sparkles');
      expect(html).to.equal('<h1 class="greeting">Hello Sparkles</h1>');
    });

    it('should return the html greeting to Stephen Harper', function() {
      var html = renderGreeting('Stephen Harper');
      expect(html).to.equal('<h1 class="greeting">Hello Stephen Harper</h1>');
    });

  });

});
