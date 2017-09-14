<?php
namespace BotFactory\MarkdownEditor\Listener;

use DirectoryIterator;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Event\ConfigureLocales;
use Flarum\Event\ConfigureWebApp;
use Illuminate\Contracts\Events\Dispatcher;

class AddApplicationAssets{
	public function subscribe(Dispatcher $events) {
		$events->listen(ConfigureWebApp::class, [$this, 'addForumAssets']);
		$events->listen(ConfigureLocales::class, [$this, 'addLocales']);
	}

	public function addForumAssets(ConfigureWebApp $event) {
		if ($event->isForum()) {
			$event->addAssets([
				__DIR__.'/../../js/forum/dist/extension.js',
				__DIR__.'/../../less/markdown-editor.less',
			]);
			
			$event->addBootstrapper('botfactoryit/mdeditor/main');
		}
	}

	/**
	* Provides i18n files.
	*
	* @param ConfigureLocales $event
	*/
	public function addLocales(ConfigureLocales $event) {
		foreach (new DirectoryIterator(__DIR__.'/../../locale') as $file) {
			if ($file->isFile() && $file->getExtension() === 'yaml') {
				$event->locales->addTranslations($file->getBasename('.'.$file->getExtension()), $file->getPathname());
			}
		}
	}
}
