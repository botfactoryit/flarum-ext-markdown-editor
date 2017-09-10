import {extend} from 'flarum/extend';
import app from 'flarum/app';
import PermissionGrid from 'flarum/components/PermissionGrid';
import addEditorPane from 'botfactoryit/mdeditor/addEditorPane';

app.initializers.add('botfactoryit-mdeditor', app => {
	// add the admin pane
	addEditorPane();
});
