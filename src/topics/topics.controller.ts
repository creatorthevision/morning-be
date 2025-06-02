import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  create(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.create(createTopicDto);
  }

  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: number) {
    return this.topicsService.findAllByUser(userId);
  }

  @Patch(':id/toggle')
  toggleActive(@Param('id') id: number) {
    return this.topicsService.toggleActive(id);
  }
} 