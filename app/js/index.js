function square(number) {
  return Math.pow(number, 2);
}

function sayHello(name) {
  return 'Hello ' + name;
}

function displayGreeting(name) {
  var greeting = sayHello(name);
  $('h1.greeting').text(greeting);
}

function renderGreeting(name) {
  var template = '<h1 class="greeting">{{ greeting }}</h1>';
  var html = Hogan.compile(template).render({
    greeting: sayHello(name)
  });
  return html;
}

$('#say-hello').on('click', function(e){
  e.preventDefault();
  var name = $('[name="name"]').val();
  $('h1.greeting').replaceWith(renderGreeting(name));
});
