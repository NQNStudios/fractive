Core.AddEventListener("OnBeginStory", () =>
{
	// Populate the sidebar from the @TableOfContents section so it's easy to maintain
	var sidebar = document.getElementById("__sidebar");
	var toc = Core.GetSection("TableOfContents");
	Core.ActivateElement(toc);
	sidebar.appendChild(toc);
});

Core.AddEventListener("OnGotoSection", function(id, element, tags, reason)
{
	// Scroll to top of new content
	var contentDiv = document.getElementById("__contentContainer");
	if(contentDiv) { contentDiv.scrollTop = 0; }
});

function InlineFunc() { return "Hello, world!"; }
