import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './entities/topic.entity';
import { CreateTopicDto } from './dto/create-topic.dto';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic)
    private topicsRepository: Repository<Topic>,
  ) {}

  async create(createTopicDto: CreateTopicDto): Promise<Topic> {
    const topic = this.topicsRepository.create(createTopicDto);
    return await this.topicsRepository.save(topic);
  }

  async findAllByUser(userId: number): Promise<Topic[]> {
    return await this.topicsRepository.find({
      where: { userId },
      relations: ['user'],
    });
  }

  async toggleActive(id: number): Promise<Topic> {
    const topic = await this.topicsRepository.findOne({ where: { id } });
    if (!topic) {
      throw new Error('Topic not found');
    }
    topic.isActive = !topic.isActive;
    return await this.topicsRepository.save(topic);
  }
} 