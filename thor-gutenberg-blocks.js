const { registerBlockType } = wp.blocks;
const { TextControl, TextareaControl, Button } = wp.components;
const { InspectorControls, MediaUpload } = wp.blockEditor;

console.log("wp.blocks:", wp.blocks);
console.log("wp.components:", wp.components);
console.log("wp.media:", wp.media);
console.log("wp.blockEditor:", wp.blockEditor);

registerBlockType("thor-gutenberg-blocks/thor-gutenberg-blocks", {
  title: "Thor Gutenberg React Block",
  icon: "smiley",
  category: "common",
  attributes: {
    title: {
      type: "string",
      default: "Thor Gutenberg Block Title",
    },
    content: {
      type: "string",
      default: "Hello, Gutenberg!",
    },
    description: {
      type: "string",
      default: "A brief description of my block.",
    },
    imageUrl: {
      type: "string",
      default:
        "", // URL of the uploaded image
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { title, content, description, imageUrl } = attributes;

    const onChangeTitle = function (newTitle) {
      setAttributes({ title: newTitle });
    };

    const onChangeContent = function (newContent) {
      setAttributes({ content: newContent });
    };

    const onChangeDescription = function (newDescription) {
      setAttributes({ description: newDescription });
    };

    const onSelectImage = function (media) {
      setAttributes({ imageUrl: media ? media.url : "" });
    };
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Description:", description);
    console.log("imageUrl:", imageUrl);

    return (
      <div>
        <InspectorControls>
          <TextControl value={title} onChange={onChangeTitle} />
          <TextareaControl value={description} onChange={onChangeDescription} />
          <MediaUpload
            onSelect={onSelectImage}
            type="image"
            value={imageUrl}
            render={({ open }) => (
              <>
                {imageUrl && <img src={imageUrl} alt="Block Preview" />}
                <Button onClick={open}>
                  {imageUrl ? "Change Image" : "Upload Image"}
                </Button>
              </>
            )}
          />
        </InspectorControls>
        <TextControl value={content} onChange={onChangeContent} />
      </div>
    );
  },
  save: function (props) {
    // Save functions for dynamic blocks must be defined server-side.
    // We can simply return null here.
    //return null;
    const { attributes } = props;
    const { title, content, description, imageUrl } = attributes;

    return (
      <div>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>{description}</p>
        {imageUrl && <img src={imageUrl} alt="Block Preview" />}
      </div>
    );
  },
});
