import type { RuleConfig } from '../rule-config';

/**
 * Option.
 */
export interface RequireJsdocOption {
  checkConstructors?: boolean;
  checkGetters?: boolean | 'no-setter';
  checkSetters?: boolean | 'no-getter';
  contexts?: (
    | string
    | {
        context?: string;
        inlineCommentBlock?: boolean;
        minLineCount?: number;
      }
  )[];
  enableFixer?: boolean;
  exemptEmptyConstructors?: boolean;
  exemptEmptyFunctions?: boolean;
  fixerMessage?: string;
  minLineCount?: number;
  publicOnly?:
    | boolean
    | {
        ancestorsOnly?: boolean;
        cjs?: boolean;
        esm?: boolean;
        window?: boolean;
      };
  require?: {
    ArrowFunctionExpression?: boolean;
    ClassDeclaration?: boolean;
    ClassExpression?: boolean;
    FunctionDeclaration?: boolean;
    FunctionExpression?: boolean;
    MethodDefinition?: boolean;
  };
}

/**
 * Options.
 */
export type RequireJsdocOptions = [RequireJsdocOption?];

/**
 * Require JSDoc comments.
 *
 * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)
 */
export type RequireJsdocRuleConfig = RuleConfig<RequireJsdocOptions>;

/**
 * Require JSDoc comments.
 *
 * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)
 */
export interface RequireJsdocRule {
  /**
   * Require JSDoc comments.
   *
   * @see [require-jsdoc](https://github.com/gajus/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules-require-jsdoc)
   */
  'jsdoc/require-jsdoc': RequireJsdocRuleConfig;
}
