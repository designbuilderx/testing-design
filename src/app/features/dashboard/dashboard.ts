import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FeatureMetric {
  name: string;
  totalUsers: number;
  activeUsers: number;
  engagement: string;
  monetization: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss']
})
export class DashboardComponent {
  features: FeatureMetric[] = [
    { name: 'Live Playground', totalUsers: 1200, activeUsers: 875, engagement: '92%', monetization: 'Medium' },
    { name: 'AI-powered Recommender', totalUsers: 980, activeUsers: 620, engagement: '88%', monetization: 'High' },
    { name: 'Community Marketplace', totalUsers: 1450, activeUsers: 1020, engagement: '95%', monetization: 'Very High' },
    { name: 'Learning Hub', totalUsers: 750, activeUsers: 430, engagement: '80%', monetization: 'Medium' },
    { name: 'Multi-Platform Export', totalUsers: 680, activeUsers: 540, engagement: '78%', monetization: 'High' },
    { name: 'Showcase Feed', totalUsers: 500, activeUsers: 300, engagement: '70%', monetization: 'Low-Medium' },
    { name: 'Builder Wizard', totalUsers: 890, activeUsers: 670, engagement: '85%', monetization: 'Medium' }
  ];
}
