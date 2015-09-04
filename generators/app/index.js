'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();
    // todo: actual prompts
    console.log(yosay('Hello, and welcome to the ' + chalk.blue('es6-lightning')+ ' generator'));
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your project name',
      default : this.appname // Default to current folder name
    }, function (answers) {
      this.log(answers.name);
      this.appname = answers.name;
      done();
    }.bind(this));
  },

  writing: {
    projectfiles: function () {
      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {appname: this.appname}
      );
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copy(
        this.templatePath('index.js'),
        this.destinationPath('src/index.js')
      )
      this.fs.copy(
        this.templatePath('eslintrc'),
        this.destinationPath('.eslintrc')
      );
      this.fs.copy(
        this.templatePath('eslintignore'),
        this.destinationPath('.eslintignore')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
    }
  },

  install: function () {
    this.installDependencies();
  }
});
