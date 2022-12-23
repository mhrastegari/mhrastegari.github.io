using Microsoft.AspNetCore.Components;

namespace mhrastegari.Shared;

public partial class Button
{
    [Parameter]
    public string? Url { get; set; }

    [Parameter]
    public string? Target { get; set; }

    [Parameter]
    public string? Title { get; set; }

    [Parameter]
    public string? Text { get; set; }
}
