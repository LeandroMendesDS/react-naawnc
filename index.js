import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from 'react';
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  LinkAnnotation,
  BookmarkView,
  ThumbnailView,
  Print,
  TextSelection,
  TextSearch,
  Annotation,
  FormFields,
  Inject,
  FormDesigner,
} from '@syncfusion/ej2-react-pdfviewer';
import { SampleBase } from './sample-base';
export class FormDesignerComponent extends SampleBase {
  viewer;
  render() {
    return (
      <div>
        <div className="control-section">
          {/* Render the PDF Viewer */}
          <PdfViewerComponent
            id="container"
            ref={(scope) => {
              this.viewer = scope;
            }}
            documentPath="FormDesigner.pdf"
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
            documentLoad={this.documentLoaded}
            showNotificationDialog={false}
            style={{ height: '640px' }}
          >
            <Inject
              services={[
                Toolbar,
                Magnification,
                Navigation,
                LinkAnnotation,
                BookmarkView,
                ThumbnailView,
                Print,
                TextSelection,
                TextSearch,
                Annotation,
                FormFields,
                FormDesigner,
              ]}
            />
          </PdfViewerComponent>
        </div>
      </div>
    );
  }
  documentLoaded = (args) => {
    if (args.documentName === 'FormDesigner.pdf') {
      this.viewer.formDesignerModule.addFormField('SignatureField', {
        name: 'Signature1',
        bounds: { X: 57, Y: 923, Width: 200, Height: 43 },
      });
    }
  };
}

const root = createRoot(document.getElementById('sample'));
root.render(<FormDesignerComponent />);
