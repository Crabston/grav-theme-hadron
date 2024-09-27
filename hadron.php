<?php
namespace Grav\Theme;

use Grav\Common\Grav;
use Grav\Common\Theme;

class Hadron extends Quark {
	public static function getSubscribedEvents() {
		return [
			'onTwigLoader' => ['onTwigLoader', 0],
			'onShortcodeHandlers' => ['onShortcodeHandlers', 0],
			'onTwigSiteVariables' => ['onTwigSiteVariables', 0],
			'onTwigInitialized' => ['onTwigInitialized', 0],
			'registerNextGenEditorPlugin' => ['registerNextGenEditorPluginShortcodes', 0]
		];
	}

	public function onTwigLoader() {
		parent::onTwigLoader();

		// add parent theme as namespace to twig
		$parentThemeName = 'quark';
		$parentThemePath = Grav::instance()['locator']->findResource('themes://' . $parentThemeName);
		$this->grav['twig']->addPath($parentThemePath . DIRECTORY_SEPARATOR . 'templates', $parentThemeName);
	}

	public function onTwigInitialized() {
		$twig = $this->grav['twig'];

		$form_class_variables = [
			//'form_outer_classes' => 'form-horizontal',
			'form_button_outer_classes' => 'buttons button-wrapper',
			'form_button_classes' => 'button',
			'form_errors_classes' => '',
			'form_field_outer_classes' => 'form-group',
			'form_field_outer_label_classes' => 'form-label-wrapper',
			'form_field_label_classes' => 'form-label',
			//'form_field_outer_data_classes' => 'col-9',
			'form_field_input_classes' => 'form-input',
			'form_field_textarea_classes' => 'form-input',
			'form_field_select_classes' => 'form-select',
			'form_field_radio_classes' => 'form-radio',
			'form_field_checkbox_classes' => 'form-checkbox',
		];

		$twig->twig_vars = array_merge($twig->twig_vars, $form_class_variables);
	}

	public static function getblogpageheroclasses()	{
		$config = Grav::instance()['config'];
		return $config->get('themes.' . $config->get('system.pages.theme') . '.blog_page_hero_classes');
	}

	public function onShortcodeHandlers() {
		$this->grav['shortcode']->registerAllShortcodes('user://themes/hadron/shortcodes');
	}

	public function onTwigSiteVariables() {
		if ($this->isAdmin() && ($this->grav['config']->get('plugins.shortcode-core.enabled'))) {
			$this->grav['assets']->add('theme://editor-buttons/admin/js/shortcode-h5p.js');
		}
	}

	public function registerNextGenEditorPluginShortcodes($event) {
		$plugins = $event['plugins'];

		$plugins['js'][] = 'user://themes/hadron/nextgen-editor/shortcodes/h5p.js';

		$event['plugins']  = $plugins;
		return $event;
	}
}
