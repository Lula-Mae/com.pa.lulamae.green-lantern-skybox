try
{
    if (model && model.skyBoxes)
    {
        model.skyBoxes.push({text: 'Green Lantern by Lula Mae', value: '/pa/sky/terrain/textures/com.pa.lulamae.green-lantern-skybox/skybox.json'});
    }
}
catch (e)
{
    console.trace(e);
}