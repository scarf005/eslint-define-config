import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export type SpaceUnaryOpsOption = {
  words?: boolean;
  nonwords?: boolean;
  overrides?: Record<string, any>;
};

/**
 * Options.
 */
export type SpaceUnaryOpsOptions = [SpaceUnaryOpsOption?];

/**
 * Enforce consistent spacing before or after unary operators
 *
 * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
 */
export type SpaceUnaryOpsRuleConfig = RuleConfig<SpaceUnaryOpsOptions>;

/**
 * Enforce consistent spacing before or after unary operators
 *
 * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
 */
export interface SpaceUnaryOpsRule {
  /**
   * Enforce consistent spacing before or after unary operators
   *
   * @see [space-unary-ops](https://eslint.vuejs.org/rules/space-unary-ops.html)
   */
  'vue/space-unary-ops': SpaceUnaryOpsRuleConfig;
}