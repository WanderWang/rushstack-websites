'use strict';

/**
 * When using the PNPM package manager, you can use pnpmfile.js to workaround
 * dependencies that have mistakes in their package.json file.  (This feature is
 * functionally similar to Yarn's "resolutions".)
 *
 * For details, see the PNPM documentation:
 * https://pnpm.js.org/docs/en/hooks.html
 *
 * IMPORTANT: SINCE THIS FILE CONTAINS EXECUTABLE CODE, MODIFYING IT IS LIKELY TO INVALIDATE
 * ANY CACHED DEPENDENCY ANALYSIS.  After any modification to pnpmfile.js, it's recommended to run
 * "rush update --full" so that PNPM will recalculate all version selections.
 */
module.exports = {
  hooks: {
    readPackage
  }
};

/**
 * This hook is invoked during installation before a package's dependencies
 * are selected.
 * The `packageJson` parameter is the deserialized package.json
 * contents for the package that is about to be installed.
 * The `context` parameter provides a log() function.
 * The return value is the updated object.
 */
function readPackage(packageJson, context) {
  // // The karma types have a missing dependency on typings from the log4js package.
  // if (packageJson.name === '@types/karma') {
  //  context.log('Fixed up dependencies for @types/karma');
  //  packageJson.dependencies['log4js'] = '0.6.38';
  // }

  if (packageJson.dependencies) {
    // The docusaurus-theme-search-typesense project does not keep u with latest Docusaurus releases.
    if (packageJson.name === 'docusaurus-theme-search-typesense') {
      const docusaurusPackageNames = [
        '@docusaurus/core',
        '@docusaurus/theme-common',
        '@docusaurus/utils',
        '@docusaurus/utils-validation'
      ];
      for (const docusaurusPackageName of docusaurusPackageNames) {
        if (packageJson.dependencies[docusaurusPackageName]) {
          console.log('PATCH: ' + docusaurusPackageName);
          packageJson.dependencies[docusaurusPackageName] = '2.0.0-beta.17';
        }
      }
    }

    // Temporary workaround for this issue:
    // https://github.com/typesense/docusaurus-theme-search-typesense/issues/11
    if (packageJson.dependencies['typesense-instantsearch-adapter']) {
      packageJson.dependencies['typesense-instantsearch-adapter'] = '2.3.0';
    }
  }

  return packageJson;
}
