import { PluginCreator, Rule, AtRule } from 'postcss'

const trim = function ({ raws }: Rule | AtRule) {
  if (raws.before) raws.before = '\n'
  if (raws.after) raws.after = '\n'
}

const trimPlugin: PluginCreator<void> = () => ({
  postcssPlugin: 'trim',
  AtRule: trim,
  Rule: trim,
})

trimPlugin.postcss = true
export default trimPlugin
