import {extend} from 'flarum/extend';
import app from 'flarum/app';
import ComposerBody from 'flarum/components/ComposerBody';
import EnhancedTextEditor from 'botfactoryit/mdeditor/components/EnhancedTextEditor';

app.initializers.add('botfactoryit-mdeditor', () => {
	extend(ComposerBody.prototype, 'init', function init() {
		this.editor = new EnhancedTextEditor({
			submitLabel: this.props.submitLabel,
			placeholder: this.props.placeholder,
			onchange: this.content,
			onsubmit: this.onsubmit.bind(this),
			value: this.content(),
		});
	});
});
