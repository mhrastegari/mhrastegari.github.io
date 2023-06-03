using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace mhrastegari.Shared;

public partial class Header
{
    [Inject] private IJSRuntime JS { get; set; } = default!;

    protected override async Task OnAfterRenderAsync(bool firstRender)
    {
        await JS.InvokeVoidAsync("import", "../Shared/Header.razor.js");
    }
}
