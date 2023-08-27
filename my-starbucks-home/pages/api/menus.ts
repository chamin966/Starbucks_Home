import { Menu } from '@/types/menu';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Menu[]>
) {
  const menus = (await import('../../public/menus.json')).default as Menu[];
  res.status(200).json(menus);
}
