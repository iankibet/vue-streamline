// v2: vue-streamline is a compatibility shim over @iankibetsh/sh-core,
// which now ships streamline as a first-class module. New code should
// import from '@iankibetsh/sh-core' directly.
import streamline from './plugins/streamline.js'

export { useStreamline, getActionUrl } from '@iankibetsh/sh-core'
export { streamline }
