import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Post-bbb3e003a1d747e8a52161dde44398dd',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: '개발산발',
  domain: 'dev.sanhee.day',
  author: '산희',

  // open graph metadata (optional)
  description: '개발산발',

  // social usernames (optional)
  //twitter: '',
  github: 'sanhee',
  linkedin: 'parksanhee',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  giscusGitHubRepo: 'sanhee/blog',
  giscusRepoId: 'R_kgDOME5Xbg',
  giscusCategory: 'Comment',
  giscusCategoryId: 'DIC_kwDOME5Xbs4Cf4Aw',

  isSearchEnabled: false,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Post',
      pageId: 'Post-bbb3e003a1d747e8a52161dde44398dd'
    },
    {
      title: 'TIL',
      pageId: 'TIL-3e35e92d1e9d4a22a02d1ba027f65402'
    },
    {
      title: 'About',
      pageId: 'About-e0ab42637eba4840afed6b7e9ddc819c'
    }
  ]
})
