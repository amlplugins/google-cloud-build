/**
 * @amlplugins/google-cloud-build
 *
 * Thin namespaced re-export of the native @google-cloud/cloudbuild SDK.
 *
 * Symmetry rule (.claude/rules/definitions/ageni.md): every @amlplugins/google-*
 * package shares this shape — a single root index re-exporting the wrapped
 * vendor SDK with zero domain modeling on top.
 *
 * Cloud Build.
 */

import * as _sdk from "@google-cloud/cloudbuild";
export * from "@google-cloud/cloudbuild";
export { _sdk as sdk };
export default _sdk;
