import axios from 'axios';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

const getHandler = async (
  _req: NextApiRequest,
  res: NextApiResponse,
) => {
    const instagramResponse = await axios.get('https://www.instagram.com/graphql/query/?query_id=17888483320059182&variables=%7B%22id%22:%229383838398%22,%22first%22:20,%22after%22:null%7D');
    return res.status(200).json(instagramResponse.data.data.user.edge_owner_to_timeline_media.edges.map(e => ({ image: e.node.display_url, url: `https://www.instagram.com/p/${e.node.shortcode}/`})));
};

const handler: NextApiHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  switch (req.method) {
    case 'GET': {
      return getHandler(req, res);
    }
    default: {
      return res.status(400).send('HTTP method not supported');
    }
  }
};

export default handler;
