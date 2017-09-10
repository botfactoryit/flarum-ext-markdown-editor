<?php namespace BotFactory\MarkdownEditor;

use Illuminate\Contracts\Events\Dispatcher;
use BotFactory\MarkdownEditor\Listener;

return function (Dispatcher $events) {
	$events->subscribe(Listener\AddApplicationAssets::class);
};
