export interface TreeNode {
  name: string;
  html?: string;
  children?: TreeNode[];
  expanded?: boolean;
}
