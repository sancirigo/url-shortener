import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Url } from 'src/schemas/url.schema';
import { generateHash } from 'src/util/util';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<Url>) {}

  async shortenUrl(url: string): Promise<string> {
    if (!url) {
      throw new Error('URL is required');
    }

    const foundUrl = await this.urlModel.findOne({ orig: url }).exec();

    if (foundUrl) {
      return foundUrl.shortened;
    }

    const hash: string = generateHash(url);

    const newUrl = await this.urlModel.create({
      orig: url,
      shortened: hash,
    });

    return newUrl.shortened;
  }

  async expandUrl(url: string): Promise<string> {
    const foundUrl = await this.urlModel.findOne({ shortened: url }).exec();

    if (!foundUrl) {
      throw new Error('URL not found');
    }

    const original = foundUrl.orig;
    foundUrl.accessed += 1;
    await foundUrl.save();

    return original;
  }
}
