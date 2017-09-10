import {extend} from "flarum/extend";
import AdminNav from "flarum/components/AdminNav";
import AdminLinkButton from "flarum/components/AdminLinkButton";
import EditorPage from "ganuonglachanh/mdeditor/components/EditorPage";

export default function () {
	// create the route
	app.routes['botfactoryit-mdeditor'] = {path: '/botfactoryit/mdeditor', component: EditorPage.component()};

	// bind the route we created to the three dots settings button
	app.extensionSettings['botfactoryit-mdeditor'] = () => m.route(app.route('botfactoryit-mdeditor'));

	extend(AdminNav.prototype, 'items', items => {
		// add the Editor tab to the admin navigation menu
		items.add('botfactoryit-mdeditor', AdminLinkButton.component({
			href: app.route('botfactoryit-mdeditor'),
			icon: 'pencil',
			children: app.translator.trans('botfactoryit-mdeditor.admin.help_texts.title'),
			description: app.translator.trans('botfactoryit-mdeditor.admin.help_texts.description')
		}));
	});
}
