import type { Schema, Struct } from '@strapi/strapi';

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    description: '';
    displayName: 'Project';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    company: Schema.Attribute.String;
    github: Schema.Attribute.String;
    link: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    tools: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionSection extends Struct.ComponentSchema {
  collectionName: 'components_section_sections';
  info: {
    description: '';
    displayName: 'Section';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillBodySkill extends Struct.ComponentSchema {
  collectionName: 'components_skill_body_skills';
  info: {
    description: '';
    displayName: 'Skills';
  };
  attributes: {
    data: Schema.Attribute.Component<'skill.skill', true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SkillSkill extends Struct.ComponentSchema {
  collectionName: 'components_skill_skills';
  info: {
    description: '';
    displayName: 'Template Skill';
  };
  attributes: {
    level: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SocialMediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    link: Schema.Attribute.String & Schema.Attribute.Required;
    logo: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'project.project': ProjectProject;
      'section.section': SectionSection;
      'skill.body-skill': SkillBodySkill;
      'skill.skill': SkillSkill;
      'social-media.social-media': SocialMediaSocialMedia;
    }
  }
}
