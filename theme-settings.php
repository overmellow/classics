<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function classics_form_system_theme_settings_alter(&$form, \Drupal\Core\Form\FormStateInterface &$form_state, $form_id = NULL) {
  // Work-around for a core bug affecting admin themes. See issue #943212.
  if (isset($form_id)) {
    return;
  }

  $form['classics_social_media'] = array(array(
        '#type'          => 'textfield',
        '#title'         => t('Facebook'),
        '#default_value' => theme_get_setting('facebook'),
        '#description'   => t("Facebook url address."),
        ),
        array(
        '#type'          => 'textfield',
        '#title'         => t('Twitter'),
        '#default_value' => theme_get_setting('twitter'),
        '#description'   => t("Twitter url address."),
    ));
    
}
