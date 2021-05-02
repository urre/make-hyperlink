export const DEFAULT_ARIA_LABEL = "Read more about cats";
export const DEFAULT_ACCESSKEY = "a";
export const DEFAULT_TABINDEX = "1";

export const notes = {
  querystring: "",
  download:
    "Download only works for same-origin URLs, or the blob: and data: schemes.",
  text:
    "Use clear link wording. Link text is the clickable word or phrase in a hyperlink. When link text clearly conveys a hyperlink's target, both users and search engines can more easily understand your content and how it relates to other pages. Avoid <code>click here</code> <code>click this</code> <code>go</code> <code>here</code> <code>this</code> <code>start</code> <code>right</code> <code>here</code> <code>more</code> and <code>learn more</code>",
  target:
    "When using <code>target=_blank</code>, add <code>rel=\"noopener noreferrer\"</code> to avoid exploitation of the window.opener API. The page we're linking to gains partial access to the linking page via the window.opener object. The newly opened tab can then change the window.opener.location to some phishing page. Users trust the page that is already opened, they won't get suspicious.",
  utm:
    "GACC allows you to append certain UTM parameters (campaign tags) to a URL pointing to a page on your site, which help identify where the links are placed within a campaign. This is incredibly useful since it can help determine where you’re getting the most traffic from, and therefore the most value for a given campaign. UTM stands for Urchin Tracking Module. These parameters are prefixed with utm_, and include source, medium, term, content, and campaign. ",
  arialabel:
    'Describing the purpose of a link in HTML using the aria-label element. In some situations, designers may choose to lessen the visual appearance of links on a page by using shorter, repeated link text such as "read more". These situations provide a good use case for aria-label in that the simpler, non-descriptive "read more" text on the page can be replaced with a more descriptive label of the link. The words "read more" are repeated in the aria-label (which replaces the original anchor text of "[Read more...]") to allow consistent communication between users. <a href="https://www.w3.org/WAI/GL/wiki/Using_aria-label_for_link_purpose">Using aria-label for link purpose</a>',
  accesskey:
    "Chrome and Firefox <kbd>Ctrl</kbd> + <kbd>⌥ Opt</kbd> + <kbd>accesskey</kbd> <br>Safari <kbd>Ctrl</kbd> + <kbd>⌥ Opt</kbd> + <kbd>accesskey</kbd>",
  analyticsUTM:
    "This tool allows you to easily add campaign parameters to URLs so you	can track Custom Campaigns in Google Analytics.",
  analyticsUTMCampaignSource:
    "Campaign Source. Use utm_source to identify a search engine,	newsletter name, or other source. Example: google",
  analyticsUTMCampaignMedium:
    "Use utm_medium to identify a medium such as email or cost-per-click. Example: cpc",
  analyticsUTMCampaignName:
    "Campaign Name. Used for keyword analysis. Use utm_campaign to identify a specific product promotion or strategic campaign.	Example: utm_campaign=spring_sale",
  analyticsUTMCampaignTerm:
    "Campaign Term. Used for paid search. Use utm_term to note the keywords for this ad. Example: cat+food",
  analyticsUTMCampaignContent:
    "Used for A/B testing and content-targeted ads. Use utm_content to differentiate ads or links that point to the same URL. Examples: logolink or textlink",
  ariaLabel:
    "Users who do not or cannot use pointing devices can tab through links and, as such, links should be in a logical tabbing order. The tabindex attribute allows you to define this order although if the HTML is linear, as it should be, a logical tabbing order should automatically fall into place",
  accessKey:
    "Access keys allow easier navigation by assigning a keyboard shortcut to a link (which will usually gain focus when the user presses Alt or Ctrl + the access key).",
  tabindex:
    "Users who do not or cannot use pointing devices can tab through links and, as such, links should be in a logical tabbing order. The tabindex attribute allows you to define this order although if  the HTML is linear, as it should be, a logical tabbing order  should automatically fall into place.",
  help: "Help specific to the context.",
  bookmark: "A link to the current section of the page.",
  license: "A copyright license for the current document",
  next:
    "Indicates that the page is in a sequence and the linked page is the next page in the sequence.",
  nofollow:
    "Indicates that the linked resource is not endorsed by the current document’s author.",
  noreferrer:
    "Tells the browser not to send an HTTP referrer header when	following the link.",
  prefetch: "The linked resource should be cached.",
  prev:
    "Indicates that the page is in a sequence and the linked page is the previous page in the sequence.",
  search:
    "A search facility that can be used to search the current, and related, documents.",
  tag:
    "A tagging term (not to be confused with HTML tags) that applies to the link.",
  queryString: "For example: /?ref=producthunt",
  jsx:
    "Link (JSX) with React Router. The primary way to allow users to navigate around your application. lt;Link&gt;  will render a fully accessible anchor tag with the proper href.A &lt;Link&gt; can know when the route it links to is active and automatically apply an activeClassName and/or activeStyle when given either prop. The lt;Link&gt; will be active if the current route is either the linked route or any descendant of the linked route. To have the link be active only on the exact linked route, use &lt;IndexLink> instead or set the onlyActiveOnIndex prop.",
};
