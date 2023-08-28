// 빌드 시 에러가 발생함을 해결할 수 없는 관계로 api화가 아닌 json을 그대로 사용할 것임

import { Menu } from '@/types/menu';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu[]>
) {
  const menus = (await import('../../public/menus.json')).default as Menu[];
  res.status(200).json(menus);
}
