<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

// TODO: extend Quark theme instead of QuarkOpenPublishing
class Hadron extends QuarkOpenPublishing
{
	public static function getSubscribedEvents() {
		return [
			'onTwigLoader' => ['onTwigLoader', 10]
		];
	}

	public function onTwigLoader() {
		parent::onTwigLoader();

		// add parent theme as namespace to twig
		// TODO: extend Quark theme instead of QuarkOpenPublishing
		$parentThemeName = 'quark-open-publishing';
		$parentThemePath = Grav::instance()['locator']->findResource('themes://' . $parentThemeName);
		$this->grav['twig']->addPath($parentThemePath . DIRECTORY_SEPARATOR . 'templates', $parentThemeName);
	}
}
