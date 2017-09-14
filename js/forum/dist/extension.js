'use strict';

System.register('botfactoryit/mdeditor/components/EnhancedTextEditor', ['flarum/utils/ItemList', 'flarum/helpers/listItems', 'flarum/components/Button', 'flarum/components/Separator', 'flarum/components/TextEditor'], function (_export, _context) {
	"use strict";

	var ItemList, listItems, Button, Separator, TextEditor, EnhancedTextEditor;
	return {
		setters: [function (_flarumUtilsItemList) {
			ItemList = _flarumUtilsItemList.default;
		}, function (_flarumHelpersListItems) {
			listItems = _flarumHelpersListItems.default;
		}, function (_flarumComponentsButton) {
			Button = _flarumComponentsButton.default;
		}, function (_flarumComponentsSeparator) {
			Separator = _flarumComponentsSeparator.default;
		}, function (_flarumComponentsTextEditor) {
			TextEditor = _flarumComponentsTextEditor.default;
		}],
		execute: function () {
			EnhancedTextEditor = function (_TextEditor) {
				babelHelpers.inherits(EnhancedTextEditor, _TextEditor);

				function EnhancedTextEditor() {
					babelHelpers.classCallCheck(this, EnhancedTextEditor);
					return babelHelpers.possibleConstructorReturn(this, (EnhancedTextEditor.__proto__ || Object.getPrototypeOf(EnhancedTextEditor)).apply(this, arguments));
				}

				babelHelpers.createClass(EnhancedTextEditor, [{
					key: 'view',
					value: function view() {
						return m(
							'div',
							{ className: 'TextEditor' },
							m(
								'ul',
								{ className: 'TextEditor-controls EnhancedTextEditor-toolbar' },
								listItems(this.toolbarItems().toArray())
							),
							m('textarea', { className: 'FormControl Composer-flexible',
								config: this.configTextarea.bind(this),
								oninput: m.withAttr('value', this.oninput.bind(this)),
								placeholder: this.props.placeholder || '',
								disabled: !!this.props.disabled,
								value: this.value() }),
							m(
								'ul',
								{ className: 'TextEditor-controls Composer-footer' },
								listItems(this.controlItems().toArray())
							)
						);
					}
				}, {
					key: 'configTextarea',
					value: function configTextarea(element, isInitialized) {
						var _this2 = this;

						babelHelpers.get(EnhancedTextEditor.prototype.__proto__ || Object.getPrototypeOf(EnhancedTextEditor.prototype), 'configTextarea', this).call(this, element, isInitialized);

						$(element).bind('keydown', 'ctrl+b', function (e) {
							_this2.bold();
							e.preventDefault();
						});

						$(element).bind('keydown', 'ctrl+i', function (e) {
							_this2.italic();
							e.preventDefault();
						});
					}
				}, {
					key: 'toolbarItems',
					value: function toolbarItems() {
						var _this3 = this;

						var items = new ItemList();

						items.add('bold', Button.component({
							icon: 'bold',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.bold'),
							className: 'Button',
							onclick: function onclick() {
								return _this3.bold();
							}
						}));

						items.add('italic', Button.component({
							icon: 'italic',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.italic'),
							onclick: function onclick() {
								return _this3.italic();
							}
						}));

						items.add('underline', Button.component({
							icon: 'underline',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.underline'),
							onclick: function onclick() {
								return _this3.underline();
							}
						}));

						items.add('heading', Button.component({
							icon: 'header',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.heading'),
							onclick: function onclick() {
								return _this3.heading();
							}
						}));

						items.add('strikethrough', Button.component({
							icon: 'strikethrough',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.strikethrough'),
							onclick: function onclick() {
								return _this3.strikethrough();
							}
						}));

						items.add('sep1', Separator.component());

						items.add('link', Button.component({
							icon: 'link',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.link'),
							onclick: function onclick() {
								return _this3.link();
							}
						}));

						items.add('quote', Button.component({
							icon: 'quote-right',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.quote'),
							onclick: function onclick() {
								return _this3.quote();
							}
						}));

						items.add('code', Button.component({
							icon: 'code',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.code'),
							onclick: function onclick() {
								return _this3.code();
							}
						}));

						items.add('sep2', Separator.component());

						items.add('ordered_list', Button.component({
							icon: 'list-ol',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.ordered_list'),
							onclick: function onclick() {
								return _this3.ordered_list();
							}
						}));

						items.add('unordered_list', Button.component({
							icon: 'list-ul',
							className: 'Button',
							title: app.translator.trans('botfactoryit-mdeditor.forum.toolbar.unordered_list'),
							onclick: function onclick() {
								return _this3.unordered_list();
							}
						}));

						return items;
					}
				}, {
					key: 'insertAroundCursor',
					value: function insertAroundCursor(before, after) {
						var textarea = this.$('textarea')[0];
						var value = this.value();
						var start = textarea ? textarea.selectionStart : value.length;
						var end = textarea ? textarea.selectionEnd : value.length;

						this.setValue(value.slice(0, start) + before + value.slice(start, end) + after + value.slice(end));

						// Keep the selected text selected
						if (textarea) {
							var newStart = start + before.length;
							var newEnd = end + before.length;
							this.setSelectionRange(newStart, newEnd);
						}
					}
				}, {
					key: 'bold',
					value: function bold() {
						this.insertAroundCursor('**', '**');
					}
				}, {
					key: 'italic',
					value: function italic() {
						this.insertAroundCursor('*', '*');
					}
				}, {
					key: 'underline',
					value: function underline() {
						this.insertAroundCursor('[u]', '[/u]');
					}
				}, {
					key: 'strikethrough',
					value: function strikethrough() {
						this.insertAroundCursor('~~', '~~');
					}
				}, {
					key: 'heading',
					value: function heading() {
						this.insertAroundCursor('# ', '#');
					}
				}, {
					key: 'link',
					value: function link() {
						this.insertAroundCursor('[', '](https://)');
					}
				}, {
					key: 'image',
					value: function image() {
						this.insertAroundCursor('![', '](https://)');
					}
				}, {
					key: 'quote',
					value: function quote() {
						this.insertAroundCursor('> ', '');
					}
				}, {
					key: 'code',
					value: function code() {
						this.insertAroundCursor('```', '```');
					}
				}, {
					key: 'ordered_list',
					value: function ordered_list() {
						this.insertAroundCursor('1. ', '');
					}
				}, {
					key: 'unordered_list',
					value: function unordered_list() {
						this.insertAroundCursor('* ', '');
					}
				}]);
				return EnhancedTextEditor;
			}(TextEditor);

			_export('default', EnhancedTextEditor);
		}
	};
});;
'use strict';

System.register('botfactoryit/mdeditor/main', ['flarum/extend', 'flarum/app', 'flarum/components/ComposerBody', 'botfactoryit/mdeditor/components/EnhancedTextEditor'], function (_export, _context) {
	"use strict";

	var extend, app, ComposerBody, EnhancedTextEditor;
	return {
		setters: [function (_flarumExtend) {
			extend = _flarumExtend.extend;
		}, function (_flarumApp) {
			app = _flarumApp.default;
		}, function (_flarumComponentsComposerBody) {
			ComposerBody = _flarumComponentsComposerBody.default;
		}, function (_botfactoryitMdeditorComponentsEnhancedTextEditor) {
			EnhancedTextEditor = _botfactoryitMdeditorComponentsEnhancedTextEditor.default;
		}],
		execute: function () {

			app.initializers.add('botfactoryit-mdeditor', function () {
				extend(ComposerBody.prototype, 'init', function init() {
					this.editor = new EnhancedTextEditor({
						submitLabel: this.props.submitLabel,
						placeholder: this.props.placeholder,
						onchange: this.content,
						onsubmit: this.onsubmit.bind(this),
						value: this.content()
					});
				});

				ComposerBody.prototype.focus = function init() {
					this.$('textarea').focus();
				};
			});
		}
	};
});