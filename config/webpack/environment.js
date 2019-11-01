const { environment } = require('@rails/webpacker')

<<<<<<< HEAD
const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    Popper: ['popper.js', 'default']
  })
)

=======
>>>>>>> f11d6087cf3b2fd865875218db25dacd6e60115a
module.exports = environment
