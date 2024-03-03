<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'northernpublicationbd' );

/** Database username */
define( 'DB_USER', 'roktim' );

/** Database password */
define( 'DB_PASSWORD', '1234' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '^xxjg8_y|@r18Zaf`c0_z3B+PEyuO]s&o eeh$Hz3*%HL:(LqkQ=ksYcIKiW6[sT' );
define( 'SECURE_AUTH_KEY',  '!xr?=PP|)PS>eY9m[G,$-T|3knoEcDU{YP 7:~e/72f4Pu>/5i[g)IM&&H/QJR(i' );
define( 'LOGGED_IN_KEY',    '79%o8B6XK]svNUcN~x3I_2&f-^hf{dP7Os;rJtOVUF@39SMKXit[IR$C(paLH^I=' );
define( 'NONCE_KEY',        'Ix-5b~YE99%Oz(IDk(N4~t D|>P+GS pdZ*D26by@>?=bs_O?k7~D5W6DT;3YEr4' );
define( 'AUTH_SALT',        'fD8KiVI2#t-}yH{8I)_}&N$44nu[4XAg$Yd5Y:J@b^j: Up9.%nbNVT< (?yj:_f' );
define( 'SECURE_AUTH_SALT', '20dL A8%{R~=BP#*08rXs5-uR$l!$B#hMY-)`a0(x><2+$Y~.}6[T)V%#jW:a-6E' );
define( 'LOGGED_IN_SALT',   'hIx<h.w1p_rf;0K< n`iar ^<<dk0kl!7%9QTGQZGE)L{H0b)AUBH?c:EELKy8MD' );
define( 'NONCE_SALT',       'I+YG1qPzOtdoUbOL~to0E_GhJ~EGXH+ !n,Q*)48{-({=y=+`TRwz]#(xH(e!e{#' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );
define('WP_ALLOW_REPAIR', true);

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
