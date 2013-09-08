Ember.Handlebars.registerBoundHelper('timestamp', function(date, options) {
  var formatter = options.hash.format ? options.hash.format : 'hh:mm a MM-DD-YYYY';
  var parsed = moment(date);
  var formatted = parsed.format(formatter);

  return new Ember.String.htmlSafe(formatted);
});